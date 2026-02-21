import { useState } from 'react';

export default function LoginForm() {
    return (
        <form className="space-y-5 mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase">Kullanıcı Adı</label>
                <input className="block w-full border border-border bg-card px-4 py-3 text-sm focus:border-acid focus:outline-none transition-colors" placeholder="admin" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase">Şifre</label>
                <input type="password" className="block w-full border border-border bg-card px-4 py-3 text-sm focus:border-acid focus:outline-none transition-colors" placeholder="••••••••" />
            </div>
            <button className="w-full h-12 bg-acid text-steel font-bold text-sm uppercase hover:bg-acid-dim transition-all">Giriş Yap</button>
        </form>
    );
}
