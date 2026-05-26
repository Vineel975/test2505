[audit/start] Tariff matching FAILED: Error: [Request ID: 1991732273c8fe88] Server Error
Uncaught FetchModelsError: fetch failed
    at fetchModels (../node_modules/@tokenlens/fetch/src/index.ts:133:2)
    at async handler (../convex/processPdf.ts:987:21)

    at async handler (../convex/processPdf.ts:987:21)
    at async POST (app\api\audit\start\route.ts:450:9)
  448 |       try {
  449 |         console.log("[audit/start] Triggering runTariffMatching for jobId:", jobId, "tariffStorageId:", tariffStorageId);
> 450 |         await convex.action(api.processPdf.runTariffMatching, {
      |         ^
  451 |           jobId,
  452 |           tariffStorageId,
  453 |         });
