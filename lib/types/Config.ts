import { Awaitable } from "@icehouse/universal--util--typescript--types";
import { Config as GUCConfig } from "@icehouse/universal--web--libraries--guc-core";

export interface Config<TTheme> extends GUCConfig<TTheme> {
  filesToProcessGlobPattern: string;
  shouldProcess?: (filePath: string) => Awaitable<boolean>;
  emitTo: ConfigEmitTo;
  filesToClearBeforeStartGlobPattern?: string;
  shouldClearFileBeforeStart?: (filePath: string) => Awaitable<boolean>;
}

export type ConfigEmitTo = ConfigEmitToNearSource | ConfigEmitToOneFile;

export interface ConfigEmitToNearSource {
  to: "nearSource";
  path: ConfigEmitToNearSourcePath;
}

export type ConfigEmitToNearSourcePath =
  | ConfigEmitToNearSourcePathRelativeString
  | ConfigEmitToNearSourcePathFunction;

export interface ConfigEmitToNearSourcePathRelativeString {
  type: "relativePath";
  relativePath: string;
  onConflict: ConfigEmitToNearSourceOnConflict;
}

export type ConfigEmitToNearSourceOnConflict =
  | "error"
  | "merge"
  | ((conflictedPath: string) => ConfigEmitToNearSourceOnConflictReturnType);

export interface ConfigEmitToNearSourceOnConflictReturnType {
  merge: boolean;
}

export interface ConfigEmitToNearSourcePathFunction {
  type: "function";
  path: (sourcePath: string) => ConfigEmitToNearSourcePathFunctionReturnType;
}

export interface ConfigEmitToNearSourcePathFunctionReturnType {
  relativePath: string;
  onConflict: ConfigEmitToNearSourceOnConflict;
}

export interface ConfigEmitToOneFile {
  to: "oneFile";
  path: string;
}
