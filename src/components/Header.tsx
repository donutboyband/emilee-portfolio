const imgVector =
  "http://localhost:3845/assets/027e5bddce9a815b7c52f040591889f3a0f50dbe.svg";
const imgVector1 =
  "http://localhost:3845/assets/006837c8e5eb8c58d86b126eb25546896c754a31.svg";

export default function Header() {
  return (
    <header className="flex w-full items-start justify-between bg-white px-8 py-2">
      <div className="flex flex-col gap-2">
        <h1 className="font-light text-[92px] text-black tracking-[-7.36px] leading-normal">
          EMILEE DURRETT
        </h1>
        <p className="font-normal text-xs text-black tracking-[0.96px] leading-normal">
          CREATIVE PORTFOLIO
        </p>
      </div>

      <nav className="flex items-center gap-6 self-end pb-1">
        <a
          href="#featured"
          className="font-normal text-[11px] text-black tracking-[0.88px] leading-normal hover:opacity-70 transition-opacity"
        >
          FEATURED WORK
        </a>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center rotate-[63.99deg]">
            <img
              src={imgVector}
              alt="Decorative star"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-6 h-6 flex items-center justify-center -rotate-[10.46deg]">
            <img
              src={imgVector1}
              alt="Decorative star"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <a
          href="#about"
          className="font-normal text-[11px] text-black tracking-[0.88px] leading-normal hover:opacity-70 transition-opacity"
        >
          ABOUT
        </a>
      </nav>
    </header>
  );
}
