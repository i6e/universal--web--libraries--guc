import { glob } from "glob";
import { unlink } from "node:fs/promises";
import { Config } from "./types/Config";

export async function beforeStart<TTheme>(
  config: Config<TTheme>
): Promise<void> {
  if (config.filesToClearBeforeStartGlobPattern) {
    const filePathsToClear = await glob(
      config.filesToClearBeforeStartGlobPattern
    );
    for (const filePath of filePathsToClear) {
      if (
        !config.shouldClearFileBeforeStart ||
        (await config.shouldClearFileBeforeStart(filePath))
      ) {
        await unlink(filePath);
      }
    }
  }
}
