import { Star, MessageSquare, Heart, Check, User } from "lucide-react";


const icons = [Star, MessageSquare, Heart, Check, User];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center p-12">
      <div className="relative max-w-md text-center">
        {/* Floating Icon Grid (No Background Square) */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[...Array(9)].map((_, i) => {
            const Icon = icons[i % icons.length]; // Pick a different icon for each box
            return (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 ${
                  i % 2 === 0
                    ? "animate-float bg-indigo-500/20 text-indigo-400"
                    : "animate-fade bg-purple-500/20 text-purple-400"
                }`}
              >
                {/* Icon */}
                <Icon className="size-10" />
              </div>
            );
          })}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-extrabold text-blue-900">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
      </div>
    </div>
  );
};


  
export default AuthImagePattern;