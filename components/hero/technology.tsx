import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiPython,
  SiTailwindcss,
  SiGraphql,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiSpringboot,
  SiAwslambda,
} from "react-icons/si";

export const Technology = () => {
  return (
    <div className="flex items-center justify-center space-x-4 flex-wrap">
      <SiReact className="h-6 w-6" style={{ color: "#61DAFB" }} />
      <SiNextdotjs className="h-6 w-6 text-black dark:text-white" />
      <SiMongodb className="h-6 w-6" style={{ color: "#47A248" }} />
      <SiMysql className="h-6 w-6" style={{ color: "#4479A1" }} />
      <SiVercel className="h-6 w-6 text-black dark:text-white" />
      <SiPython className="h-6 w-6" style={{ color: "#3776AB" }} />
      <SiTailwindcss className="h-6 w-6" style={{ color: "#06B6D4" }} />
      <SiGraphql className="h-6 w-6" style={{ color: "#E10098" }} />
      <SiTypescript className="h-6 w-6" style={{ color: "#3178C6" }} />
      <SiDocker className="h-6 w-6" style={{ color: "#2496ED" }} />
      <SiKubernetes className="h-6 w-6" style={{ color: "#326CE5" }} />
      <SiAwslambda className="h-6 w-6" style={{ color: "#FF9900" }} />
      <SiSpringboot className="h-6 w-6" style={{ color: "#6DB33F" }} />
    </div>
  );
};
