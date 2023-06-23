

const WhyUs = ({data}) => {

    const {imageSrc, title, description} =data

    return (
    <div className="bg-white max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
        <img className="w-full" src={imageSrc} alt="Card Image" />
        <div className="p-4">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
    );
};

export default WhyUs;