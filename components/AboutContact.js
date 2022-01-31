const categories = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc: "https://media.giphy.com/media/YHc0ao3KN9acE/giphy.gif",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
];

export default function AboutContact() {
  return (
    <section data-scroll data-scroll-section className="relative  bg-[#eae9e5]">
      <div className="max-w-xl mx-auto pt-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="absolute top-[-6vw] sm:top-[-3vw] right-0 text-right text-[11.5vw] font-normal font-GTWalsheim tracking-tight text-gray-900">
          So, no more words
        </h2>

        <div className="flex justify-center mt-10 space-y-12  ">
          {categories.map((category) => (
            <a
              key={category.name}
              href='/Contact'
              className="group block w-[540px] h-[640px]"
            >
              <div
                aria-hidden="true"
                className="relative overflow-hidden group-hover:opacity-75 h-full"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
                <h2 className="absolute right-0 left-0 text-white bottom-1/2 translate-y-1/2 text-center font-SchnyderL underline underline-offset-2 ">
                  Contact Me
                </h2>
                <ul className="absolute bottom-5 w-full  text-white flex justify-center space-x-32 font-SchnyderL text-lg">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/konstantintaylor/"
                    >
                      Linked In
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/KONSTANTINDEV1">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/iamtinotaylor/"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
