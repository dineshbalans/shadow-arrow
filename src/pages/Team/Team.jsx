import React from "react";
import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import MainContext from "../../components/General/MainContext";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import teamImage from "./assets/teamImage.svg";
import teamsBuildingImage from "./assets/teamsBuildingImage.svg";
import teamBuilding from "./assets/teamBuilding.svg";
import { teamsData } from "../../components/Team/data/teamsData";
import Content from "../../components/Team/components/Content";
import TeamItem from "../../components/Team/components/TeamItem";

const Team = () => {
  return (
    <section className="xxl:container xxl:mx-auto pt-20 relative ">
      {/* <BgframeImg URL={serviceBg1} style="right-0 top-0" /> */}
      <Breadcrumbs
        currentPage={[
          { URL: "", text: "Pages" },
          { URL: "", text: "Team" },
        ]}
        style="py-8"
      />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20">
        <div
          className=" space-y-12 pt-4 pb-20 
      flex justify-between items-center"
        >
          <div className="w-[43%] space-y-6">
            <MainContext
              style="space-y-4"
              title="Meet Our Team"
              subTitle="Innovation and Creativity are the driving forces behind our team’s success"
              desc="Discover how our dedicated team champions your service needs with unmatched skills and expertise."
              descStyle="text-xl xl:w-[100%]"
            />
            <div className="flex justify-cente">
              <button
                className="flex gap-3 items-center border-2 border-primary p-4 rounded-full
            hover:bg-gradient-to-r from-primary via-[#FF294B] to-primary transition-all
            ease-linear shadow-2xl hover:shadow-primary"
              >
                <span className="text-xl font-medium">
                  Explore Our Services
                </span>
                <FaChevronRight className="scale-[1.4]" />
              </button>
            </div>
          </div>
          <div className="w-[55%]">
            <img src={teamImage} alt="" className="object-contain" />
          </div>
        </div>
        <div className="space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-4xl font-semibold w-[60%] leading-tight">
              Introducing The core team that powers our Innovative Solutions
            </h1>
            <div className="space-y-5 pt-8">
              <ul className="flex gap-8 justify-center">
                {[0, 1, 2].map((i) => (
                  <FaStar
                    className={`${
                      i === 1 ? "scale-[3] -translate-y-2" : "scale-[1.8]"
                    }`}
                  />
                ))}
              </ul>
              <h3 className="text-3xl font-medium">Our Mission</h3>
            </div>
            <p
              className="w-[51%]  font-medium
        "
            >
              At the heart of our service providing company lies a dedicated
              team comprised of highly skilled professionals, each masterful in
              their respective roles. From innovative solution architects and
              passionate design thinkers to meticulous project handlers and
              customer-oriented service champions
            </p>
          </div>
          <div className="bg-[#FEF6F2] flex rounded-lg">
            <div className="w-[47%]">
              <img src={teamsBuildingImage} alt="" className="object-contain" />
            </div>
            <div
              className="w-[53%] flex flex-col justify-center items-center text-center
              px-12 space-y-4"
            >
              <img
                src={teamBuilding}
                alt=""
                className="mx-auto object-contain"
              />
              <p className="font-semibold">
                Our team members come from a wealth of backgrounds, each
                bringing a unique set of skills and experiences that contribute
                to our holistic approach
              </p>
              <p className="text-sm font-medium ">
                Flaunting a cumulative experience spanning decades, our team’s
                wide-ranging expertise encapsulates the essence of our approach
                to service always thinking outside the box.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE8D7] rounded-t-[70px] mt-16 pdngx py-14 space-y-12">
        <h1 className="text-3xl font-bold text-center">
          Our Technical Experts
        </h1>
        <ul className="relative flex flex-wrap justify-center gap-14 w-full overflow-hidden p-0">
          {teamsData.map(({ id, image, name, designation, socialLinks }) => (
            <TeamItem
              key={id}
              style="w-[30.2%]"
              {...{ image, name, designation, socialLinks }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;