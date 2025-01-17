import { useState } from "react";

const Movies = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("movies"); // Default: Movies
    const [language, setLanguage] = useState("All"); // Default: Show all languages

    // Define Movies with Rating & Language
    const movies = [
        { name: "Iron Man", category: "Masterpiece", language: "English" },
        { name: "Dr Strange", category: "Great", language: "English" },
        { name: "Thor: Ragnarok", category: "Great", language: "English" },
        { name: "RRR", category: "Good", language: "Telugu" },
        { name: "Lucky Bhaskar", category: "Great", language: "Telugu" },
        { name: "Oh My Kadavule", category: "Great", language: "Tamil" },
        { name: "Bachna Ae Haseeno", category: "Good", language: "Hindi" },
        { name: "Parasite", category: "Great", language: "Korean" },
    ];

    // Define TV Shows with Rating & Language
    const tvShows = [
        { name: "Breaking Bad", category: "Masterpiece", language: "English" },
        { name: "Game of Thrones", category: "Masterpiece", language: "English" },
        { name: "Squid Games", category: "Great", language: "Korean" },
    ];

    // Get correct list based on selected category
    let list = category === "movies" ? movies : tvShows;

    // Apply search filter
    list = list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    // Apply language filter (if not "All")
    if (language !== "All") {
        list = list.filter(item => item.language === language);
    }

    // Sort the list by category (Masterpiece, Great, Good)
    const categoryOrder = ["Masterpiece", "Great", "Good", "Meh", "Bad"];
    list.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

    // Get unique languages for the filter dropdown
    const allLanguages = ["All", ...new Set([...movies, ...tvShows].map(item => item.language))];

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-900 text-white p-4">
            {/* Color Code Key */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-600"></div>
                    <span>Masterpiece</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-900"></div>
                    <span>Great</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600"></div>
                    <span>Good</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-600"></div>
                    <span>Meh</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-600"></div>
                    <span>Bad</span>
                </div>
            </div>

            {/* Search Bar */}
            <input 
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-md p-2 mb-4 text-black rounded outline-none border border-gray-400 focus:border-green-500"
            />

            {/* Category Toggle Buttons */}
            <div className="flex gap-4 mb-4">
                <button 
                    onClick={() => setCategory("movies")} 
                    className={`px-4 py-2 rounded ${category === "movies" ? "bg-green-500" : "bg-gray-700"}`}
                >
                    Movies
                </button>
                <button 
                    onClick={() => setCategory("tvshows")} 
                    className={`px-4 py-2 rounded ${category === "tvshows" ? "bg-green-500" : "bg-gray-700"}`}
                >
                    TV Shows
                </button>
            </div>

            {/* Language Filter Dropdown */}
            <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="mb-6 p-2 text-black rounded outline-none border border-gray-400 focus:border-green-500"
            >
                {allLanguages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>

            {/* Movie/TV Show List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                {list.map((item, index) => (
                    <div 
                        key={index} 
                        className={`p-4 text-center rounded shadow-lg transition ${
                            item.category === "Masterpiece" ? "bg-purple-600 hover:bg-purple-500" :
                            item.category === "Great" ? "bg-green-900 hover:bg-green-700" :
                            item.category === "Good" ? "bg-green-600 hover:bg-green-500" :
                            item.category === "Meh" ? "bg-gray-600 hover:bg-gray-500" :
                            item.category === "Bad" ? "bg-red-600 hover:bg-red-500" : ""    
                        }`}
                    >
                        <p className="font-semibold">{item.name}</p>
                        <span className="text-sm opacity-80">{item.language}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
