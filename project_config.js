// const ProjectName = "prod"; // 生产环境
const ProjectName = "dev"; // 测试环境


const isDev = process.env.NODE_ENV === "development";


let ConfigProject = {
  prod: "prodConfig",
  dev: "devConfig"
};
const config = (file => require(`./projectConfig/${file}.json`))(
  ConfigProject[ProjectName]
);

export { config };

