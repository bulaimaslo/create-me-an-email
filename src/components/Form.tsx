import React from 'react';
import { getGPT3Response } from './api/generate';


export default function Form() {
    const sampleResponse = `Dear Professor [Name],

I apologize for submitting my assignment late. I understand that this was unacceptable and I take full responsibility for my actions. I have been dealing with some personal issues that have caused me to fall behind in my work, but I am now back on track and I am committed to meeting all of my deadlines in the future.

Once again, I apologize for my tardiness and I will do my best to make sure this does not happen again.

Sincerely,
[Your Name]`;
    const [purpose, setPurpose] = React.useState<string>("");
    const [emailRespose, setEmailResponse] = React.useState<string>("");

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPurpose(event.target.value);
    }

    const handleClick = async () => {
        console.log(purpose);

        const response = await getGPT3Response(purpose);

        console.log(response);

        setEmailResponse(`${response}.`);
    }



    return (
        <section className="text-pink-500 body-font h-full">
            <div className="container mx-auto">
                <div className="p-2 flex flex-col justify-center items-center m-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-5/6 h-100">
                    <label className="leading-10 text-xl text-pink-500">Purpose of the mail:</label>
                    <input value={purpose} onChange={handleChange} className="w-11/12 bg-primary-100 rounded border border-gray-300 focus:ring-2 focus:ring-pink-500 text-lg outline-none text-gray-700 py-1 px-3 leading-8" placeholder="Apologize professor for late assignment"></input>
                    <button onClick={handleClick} className="px-7 m-5 py-3 text-lg text-pink-600 font-semibold rounded-full border border-pink-200 hover:text-black hover:bg-pink-600 hover:border-transparent ">Generate</button>
                    <textarea value={emailRespose} readOnly className="w-11/12 bg-primary-100 rounded pb-80 mb-4 text-lg " placeholder= {sampleResponse} />
                </div>
            </div>
        </section>
    );
}
