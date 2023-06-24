/* eslint-disable react/prop-types */


const WhyUs = ({data}) => {

    const {imageSrc, title, description} = data

    return (
    <div className="bg-white max-w-sm mx-auto rounded-lg shadow-lg">
        <img className="w-full h-64 rounded-lg" src={imageSrc} alt="Card Image" />
        <div className="p-4 h-56">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
    );
};

export default WhyUs;