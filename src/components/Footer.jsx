import { useState } from "react";

const GetInTouch = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const email = "hirushadheemantha@gmail.com"; // Replace with your email address
    const phone = "+1234567890"; // Replace with your phone number

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000); // Reset success after 2 seconds
        });
    };

    return (
        <div
            className="flex flex-col items-center justify-center my-10 px-6 overflow-hidden"
            style={{ padding: "20px" }}
        >
            <h1 className="text-3xl font-light text-center mb-6">Get in Touch</h1>
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-lg">
                        Email: <span className="text-neutral-700">{email}</span>
                    </p>
                    <button
                        onClick={copyToClipboard}
                        className="border border-white text-white rounded-full px-2 py-1 text-xs hover:border-neutral-500 hover:text-neutral-500 transition duration-300 ease-in-out"
                    >
                        Copy
                    </button>
                </div>
                <p className="text-lg">
                    Phone: <span className="text-neutral-700">{phone}</span>
                </p>
                {copySuccess && (
                    <p className="text-sm text-green-500">Email copied to clipboard!</p>
                )}
            </div>
        </div>
    );
};

export default GetInTouch;
