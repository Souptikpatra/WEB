function Button({ btnName, type }) {
    return (
        <button type={type} className="bg-blue-500 text-gray-50 hover:bg-blue-700 px-4 py-2 rounded">
            {btnName}
        </button>
    );
}

export default Button;

