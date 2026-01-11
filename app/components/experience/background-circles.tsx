export default function BackgroundCircles() {
  return (
    <div className="absolute right-0 bottom-0 overflow-hidden">
      <div className="relative h-96 w-[480px]">
        <div className="absolute left-48 bg-red opacity-5 rounded-full top-12 h-[480px] w-[480px]" />
        <div className="absolute bg-orange opacity-10 rounded-full top-56 right-4 h-[500px] w-[500px]" />
      </div>
    </div>
  );
}
