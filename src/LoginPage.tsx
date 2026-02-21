import { useState, useTransition } from 'react';

// Bileşen içindeki özel Buton (shadcn bağımlılığını kaldırmak için)
const IndustrialButton = ({ children, isPending, ...props }: any) => (
    <button
        {...props}
        className="w-full h-12 bg-acid text-black font-black text-xs tracking-[0.2em] uppercase hover:bg-white active:scale-[0.98] transition-all duration-200 disabled:opacity-50 rounded-none border-b-4 border-acid/50 cursor-pointer flex items-center justify-center gap-2"
    >
        {isPending ? (
            <>
                <span className="inline-block h-4 w-4 border-2 border-black border-t-transparent animate-spin" />
                DOĞRULANIYOR...
            </>
        ) : (
            children
        )}
    </button>
);

export default function LoginPage() {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            alert("Giriş başarılı!\nVeri: " + JSON.stringify(formData));
        });
    };

    return (
        <div className="relative flex min-h-screen w-full overflow-hidden bg-background">
            {/* Sol: Devasa tipografik element */}
            <div className="hidden lg:flex lg:flex-1 items-center justify-center relative select-none">
                <div className="absolute inset-0 flex flex-col justify-center px-12 pointer-events-none">
                    <span className="text-[12vw] font-black leading-[0.85] tracking-[-0.06em] text-foreground/[0.04] uppercase">Login</span>
                    <span className="text-[12vw] font-black leading-[0.85] tracking-[-0.06em] text-foreground/[0.04] uppercase"> &nbsp; &nbsp; &nbsp; Page</span>
                </div>

                <div className="relative z-10 max-w-md px-12">
                    <div className="mb-8">
                        <div className="inline-block border border-acid/30 px-3 py-1 mb-6">
                            <span className="text-acid text-xs font-mono tracking-widest uppercase">v0.1.0-DEMO</span>
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-foreground leading-none mb-4">
                            Login<br /><span className="text-acid">Page</span>
                        </h1>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p>
                    </div>

                    <div className="space-y-2 border-t border-border pt-6">
                        {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="h-px w-4 bg-acid" />
                                <span className="text-xs text-muted-foreground font-mono">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden lg:block w-px bg-acid/20 self-stretch" />

            {/* Sağ: Login formu */}
            <div className="flex w-full lg:w-[420px] xl:w-[460px] flex-col justify-center px-8 sm:px-12 lg:px-10">
                <div className="w-full max-w-sm mx-auto">
                    <div className="mb-8">
                        <h2 className="text-lg font-bold tracking-tight text-foreground uppercase">
                            Login Page <span className="text-acid text-[10px] ml-2 font-mono">/ DEMO</span>
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 font-mono text-[11px]">
                            Yönetim paneline erişmek için kimlik bilgilerinizi girin.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Kullanıcı Adı</label>
                            <input
                                name="username"
                                type="text"
                                className="block w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-acid focus:outline-none focus:ring-1 focus:ring-acid transition-colors font-mono"
                                placeholder="admin"
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Şifre</label>
                            <input
                                name="password"
                                type="password"
                                className="block w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-acid focus:outline-none focus:ring-1 focus:ring-acid transition-colors"
                                placeholder="••••••••"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <IndustrialButton type="submit" isPending={isPending}>GİRİŞ YAP</IndustrialButton>
                    </form>

                    <div className="mt-12 pt-6 border-t border-border/50">
                        <p className="text-[9px] text-muted-foreground/40 font-mono text-center uppercase tracking-[0.3em]">
                            Login Page // Demo Mode
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
