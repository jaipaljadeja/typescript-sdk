import type {
  Apibara,
  ApibaraConfig,
  ApibaraDynamicConfig,
  LoadConfigOptions,
} from "apibara/types";
import consola from "consola";
import { createHooks } from "hookable";
import { loadOptions } from "./config/loader";
import { updateApibaraConfig } from "./config/update";
import { scanIndexers } from "./scan";

export async function createApibara(
  config: ApibaraConfig = {},
  opts: LoadConfigOptions = {},
  dev = false,
): Promise<Apibara> {
  const options = await loadOptions(config, opts, dev);

  // Enable source map support in Node
  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS
    ? `${process.env.NODE_OPTIONS} --enable-source-maps`
    : "--enable-source-maps";

  const apibara: Apibara = {
    options,
    indexers: [],
    hooks: createHooks(),
    close: () => apibara.hooks.callHook("close"),
    logger: consola.withTag("apibara"),
    async updateConfig(newConfig: ApibaraDynamicConfig) {
      updateApibaraConfig(apibara, newConfig);
    },
  };

  apibara.hooks.addHooks(apibara.options.hooks);

  await scanIndexers(apibara);

  return apibara;
}
