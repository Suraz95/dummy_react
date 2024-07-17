import React from 'react';

const newsItems = [
  {
    category: "Snacks",
    title: "Urna pretium elit mauris cursus at elit Vestibulum.",
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/blog/2.jpg", 
    date: "10 oct",
  },
  {
    category: "Food",
    title: "Best guide to Shopping for organic ingredients.",
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/blog/1.jpg", 
    date: "09 sep",
  },
  {
    category: "Snacks",
    title: "Cursus at elit vestibulum urna pretium elit mauris.",
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v21/carrot-html/assets/img/blog/3.jpg", 
    date: "12 oct",
  },
];

const LatestNews = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Latest News</h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
        <div className="flex flex-wrap justify-center">
          {newsItems.map((news, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg relative group">
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">By Admin | {news.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                  <a href="#" className="text-green-600 font-bold">Read More &rarr;</a>
                </div>
                <div className="relative overflow-hidden">
                  <img className="w-full h-50 object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-2" src={news.image} alt={news.title} />
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white text-xl font-bold py-1 px-3 rounded w-14">
                    {news.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
