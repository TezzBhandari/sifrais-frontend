import type { Metadata } from 'next';
import { Formnav } from './components/Formnav';
export const metadata: Metadata = {
    title: 'Form Section' ,
    description: '' ,};
export default function RootLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
return (
        <>
        <div className='flex justify-center flex-col p-4' id='printable-section'>
        <Formnav />
        <hr></hr>
         <div>
            {children}
         </div>
        </div>
        </>
        );
}