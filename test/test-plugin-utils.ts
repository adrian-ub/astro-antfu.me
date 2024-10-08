/* eslint-disable ts/explicit-function-return-type */
import type { AstroIntegrationLogger } from 'astro'
import type { VitessePluginContext } from '../src/utils/plugins'

export function createTestPluginContext(): VitessePluginContext {
  return {
    command: 'dev',
    // @ts-expect-error - we don't provide a full Astro config but only what is needed for the
    // plugins to run.
    config: { integrations: [] },
    isRestart: false,
    logger: new TestAstroIntegrationLogger(),
  }
}

class TestAstroIntegrationLogger {
  options = {} as AstroIntegrationLogger['options']
  constructor(public label = 'test-integration-logger') {}
  fork = (label: string) => new TestAstroIntegrationLogger(label)
  info = () => undefined
  warn = () => undefined
  error = () => undefined
  debug = () => undefined
}
