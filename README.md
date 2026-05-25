#17 34.84 Type error: Property 'stagingMutations' does not exist on type '{ jobMutations: { generateUploadUrl: FunctionReference<"mutation", "public", EmptyObject, string, string | undefined>; createJob: FunctionReference<"mutation", "public", { ...; }, string & { ...; }, string | undefined>; ... 6 more ...; completeJobWithResult: FunctionReference<...>; }; processPdf: { ...; }; processin...'.
#17 34.84
#17 34.84 34 |
#17 34.84   35 |   const convex = new ConvexHttpClient(CONVEX_URL);
#17 34.84 > 36 |   await convex.mutation(api.stagingMutations.upsertStagingJob, {
#17 34.84      |                             ^
#17 34.84   37 |     claimId, slNo, status: "done", jobId,
#17 34.84   38 |   });
#17 34.84   39 |
#17 34.94 Next.js build worker exited with code: 1 and signal: null
#17 34.99 error: script "build" exited with code 1
#17 ERROR: process "/bin/sh -c bun run build" did not complete successfully: exit code: 1
 
