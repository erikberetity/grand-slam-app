import '../styles/tailwind.css';
import LoginForm from '@/app/auth/LoginForm';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full max-w-md p-8 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Login</h2>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
