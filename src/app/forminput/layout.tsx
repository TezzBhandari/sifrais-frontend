import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: '' ,
    description: '' ,};
export default function RootLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
return (
        <div className='flex justify-center flex-col p-4'>
         {children}
        </div>
        );
}