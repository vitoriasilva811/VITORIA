import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Edit2, Trash2, Save, X, User, AlertCircle, Settings } from 'lucide-react';
import { getSupabase } from '../lib/supabase';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const AdminView = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Estudante' });
  const [error, setError] = useState<string | null>(null);
  const [configMissing, setConfigMissing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setUsers(data || []);
      setConfigMissing(false);
    } catch (err: any) {
      if (err.message.includes('Supabase URL and Anon Key are required')) {
        // Fallback to localStorage
        const localData = localStorage.getItem('ua_mock_users');
        if (localData) {
          setUsers(JSON.parse(localData));
        } else {
          const initialUsers = [
            { id: 1, name: 'Admin UA', email: 'admin@ua.pt', role: 'Administrador' },
            { id: 2, name: 'João Silva', email: 'joao@ua.pt', role: 'Estudante' }
          ];
          setUsers(initialUsers);
          localStorage.setItem('ua_mock_users', JSON.stringify(initialUsers));
        }
        setConfigMissing(true); // Still set to true to show the non-blocking warning
      } else {
        setError('Erro ao carregar utilizadores: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      let supabase;
      try {
        supabase = getSupabase();
      } catch (e) {
        // Mock mode
        const newUser = { ...formData, id: Date.now() };
        let updatedUsers;
        if (editingId) {
          updatedUsers = users.map(u => u.id === editingId ? { ...u, ...formData } : u);
        } else {
          updatedUsers = [newUser, ...users];
        }
        setUsers(updatedUsers);
        localStorage.setItem('ua_mock_users', JSON.stringify(updatedUsers));
        setFormData({ name: '', email: '', role: 'Estudante' });
        setEditingId(null);
        return;
      }

      if (editingId) {
        const { error } = await supabase
          .from('users')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('users')
          .insert([formData]);
        if (error) throw error;
      }
      setFormData({ name: '', email: '', role: 'Estudante' });
      setEditingId(null);
      fetchUsers();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (user: UserData) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem a certeza que deseja eliminar este utilizador?')) return;
    try {
      let supabase;
      try {
        supabase = getSupabase();
      } catch (e) {
        // Mock mode
        const updatedUsers = users.filter(u => u.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('ua_mock_users', JSON.stringify(updatedUsers));
        return;
      }

      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchUsers();
    } catch (err: any) {
      setError('Erro ao eliminar: ' + err.message);
    }
  };




  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col pb-24 px-4 pt-8"
    >
      {/* Config Warning (Non-blocking) */}
      {configMissing && (
        <div className="mb-8 bg-amber-50 p-4 rounded-2xl border border-amber-100 flex items-start gap-3">
          <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
          <div className="flex-grow">
            <p className="text-amber-900 font-bold text-sm">Modo de Demonstração Ativo</p>
            <p className="text-amber-700 text-xs leading-relaxed">
              As credenciais do Supabase não foram configuradas. Os dados estão a ser guardados localmente no seu navegador.
              Para persistência real, configure <strong>VITE_SUPABASE_URL</strong> e <strong>VITE_SUPABASE_ANON_KEY</strong> nas definições.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary text-white p-2 rounded-lg">
          <User size={24} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Gestão de Utilizadores</h1>
      </div>

      {/* Form Section */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          {editingId ? <Edit2 size={18} /> : <UserPlus size={18} />}
          {editingId ? 'Editar Utilizador' : 'Novo Utilizador'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome</label>
            <input 
              required
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
            <input 
              required
              type="email"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Função</label>
            <select 
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option>Estudante</option>
              <option>Professor</option>
              <option>Administrador</option>
              <option>Funcionário</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-primary text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2">
              <Save size={18} /> {editingId ? 'Guardar Alterações' : 'Criar Utilizador'}
            </button>
            {editingId && (
              <button 
                type="button" 
                onClick={() => { setEditingId(null); setFormData({ name: '', email: '', role: 'Estudante' }); }}
                className="px-4 py-2 border border-slate-200 rounded-lg text-slate-500"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </form>
      </section>

      {/* List Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold px-2">Lista de Utilizadores</h2>
        {loading ? (
          <p className="text-center py-8 text-slate-400">A carregar...</p>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {users.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email} • {user.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(user)} className="p-2 text-slate-400 hover:text-primary transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {users.length === 0 && (
              <p className="text-center py-8 text-slate-400 italic">Nenhum utilizador encontrado.</p>
            )}
          </div>
        )}
      </section>
    </motion.div>
  );
};
