const Title = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <div className="lg:max-w-fit text-center space-y-2">
      <h1 className="text-2xl sm:text-4xl font-semibold">{title}</h1>
      <p className="sm:max-w-[400px] text-xs sm:text-sm text-gray-600">
        {desc}
      </p>
    </div>
  );
};
export default Title;
