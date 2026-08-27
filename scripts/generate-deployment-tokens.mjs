import { randomBytes } from "node:crypto";

const token = () => randomBytes(32).toString("base64url");

console.log("Generate two different Worker Secrets and keep them private:");
console.log("");
console.log(`SUB_STORE_ADMIN_TOKEN=${token()}`);
console.log(`SUB_STORE_PUBLIC_DOWNLOAD_TOKEN=${token()}`);
console.log("");
console.log("Do not commit these values or paste them into an issue.");
