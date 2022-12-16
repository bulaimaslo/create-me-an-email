export default function Form() {
    return (
        <section className="text-pink-500 body-font">
            <div className="container mx-auto">
                <div className="p-2 flex flex-col justify-center items-center m-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-2/3">
                    <label className="leading-10 text-xl text-pink-500">Purpose of the mail:</label>
                    <input className="w-11/12 bg-primary-100 rounded border border-gray-300 focus:ring-2 focus:ring-pink-500 text-lg outline-none text-gray-700 py-1 px-3 leading-8 "></input>
                    <div>
                        <button className="px-7 m-5 py-3 text-lg text-pink-600 font-semibold rounded-full border border-pink-200 hover:text-black hover:bg-pink-600 hover:border-transparent ">Generate</button>
                    </div>
                    <textarea className="w-11/12 bg-primary-100 rounded pb-48 mb-4 font-bold text-lg" placeholder="Your email will be generated here" />
                </div>
            </div>
        </section>
    );
}