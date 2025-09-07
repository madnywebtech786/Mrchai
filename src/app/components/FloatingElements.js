export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      <div
        className="absolute top-20 left-10 animate-bounce"
        style={{ animationDelay: "0s" }}
      >
        <div className="w-8 h-8 bg-[#e5ab61] rounded-full opacity-20"></div>
      </div>
      <div
        className="absolute top-40 right-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-6 bg-black rounded-full opacity-20"></div>
      </div>
      <div
        className="absolute bottom-40 left-20 animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-10 h-10 bg-[#e5ab61] rounded-full opacity-20"></div>
      </div>
      <div
        className="absolute bottom-20 right-10 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-7 h-7 bg-black rounded-full opacity-20"></div>
      </div>
    </div>
  );
}
