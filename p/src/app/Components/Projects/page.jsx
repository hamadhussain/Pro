import Image from "next/image";
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Page = () => {
  const grad = [
    { Title: "Financial Business Analyst", image: "/Pro/1.jpg", para: "Online business systems have revolutionized commerce by providing a platform for entrepreneurs to reach a global audience. These systems leverage the power of the internet to facilitate transactions, communication, and marketing strategies. They offer convenience and accessibility, allowing businesses to operate 24/7 without geographical constraints" },
    { Title: "Product Business Analyst", image: "/Pro/2.jpg", para: "With online business systems, entrepreneurs can minimize overhead costs associated with brick-and-mortar establishments. This includes reduced expenses on rent, utilities, and staffing. Moreover, these systems enable businesses to streamline operations through automation, freeing up time for strategic planning and growth initiatives." },
    { Title: "Customer Deal Business Analyst", image: "/Pro/3.jpg", para: "E-commerce platforms serve as the backbone of online business systems, offering customizable storefronts, secure payment gateways, and integrated shipping solutions. These platforms cater to a wide range of industries and business models, from retail and manufacturing to service-based businesses and digital products." },
    { Title: "Management Business Analyst", image: "/Pro/4.jpg", para: "Online business systems foster a competitive landscape where businesses can differentiate themselves through unique branding, product offerings, and customer experiences. They empower small businesses and startups to compete with industry giants on a level playing field, driving innovation and diversity in the marketplace." },
    {
      Title: "Online Transacton Business Analyst",
      image: "/Pro/5.jpg",
      para: "One of the key advantages of online business systems is the wealth of data they generate. Through analytics tools, businesses can gain insights into customer behavior, market trends, and performance metrics. This data-driven approach enables informed decision-making and targeted marketing strategies.",
    },
    { Title: "Meeting Business Analyst", image: "/Pro/6.jpg", para: "Online business systems facilitate seamless scalability, allowing businesses to expand their operations rapidly in response to market demand. Whether it's adding new products, entering new markets, or diversifying revenue streams, these systems provide the flexibility needed for growth without the constraints of traditional business models." },
    { Title: "Friendly User Business Analyst", image: "/Pro/7.jpg", para: "Collaboration and partnerships are integral to online business systems, with opportunities for businesses to connect with suppliers, distributors, and other stakeholders worldwide. This interconnectedness fosters synergies and strategic alliances that drive mutual growth and innovation in the digital ecosystem." },
    { Title: "Money Payment Business Analyst", image: "/Pro/8.jpg", para: "As online business systems continue to evolve, emerging technologies such as artificial intelligence, augmented reality, and blockchain are shaping the future of commerce. These technologies enhance personalization, security, and efficiency, opening up new possibilities for businesses to innovate and stay ahead in an ever-changing landscape" },
  ];
  return (
    <div
      name="test2"
      className=" py-10 max-h-full  flex flex-col justify-center items-center"
    >
      <h1 className="h1 flex items-center">Projects <AiOutlineFundProjectionScreen /></h1>
      <div className=" grid grid-cols-2 gap-4">
        {grad.map((i, k) => {
          return (
            <>
              <div className="  rounded-lg shadow-lg overflow-hidden">
                <div key={k} className="bg-gray-100 py-16 flex px-6 ">
                  <Image src={i.image} alt="image" height={100} width={300} />
                  <div className="text-center px-4">
                    {" "}
                    <h3 className="text-lg font-medium text-gray-900">
                      {i.Title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{i.para}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
