import { existsSync } from "node:fs";
import { platform } from "node:os";
import { execFileSync } from "node:child_process";

if (!existsSync("dist/pagefind")) {
  process.exit(0);
}

if (platform() === "win32") {
  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      "Copy-Item -Path dist/pagefind -Destination public/pagefind -Recurse -Force",
    ],
    { stdio: "inherit" }
  );
} else {
  execFileSync("cp", ["-r", "dist/pagefind", "public/pagefind"], {
    stdio: "inherit",
  });
}
