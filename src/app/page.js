"use client"
const HomePage = () => {
  console.log("From Me");
  return (
    <div className="text-5xl">
      <h1>This is home page</h1>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
    </div>
  );
};

export default HomePage; 