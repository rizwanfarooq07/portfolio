declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.jpg" {
  const content: any; // you can also set this to string
  export default content;
}
