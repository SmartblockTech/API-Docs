import concurrently from 'concurrently';

(async () => {
  const commands = [
    'pub:cleanup:pre',
    'pub:build',
    'pub:export',
    'pub:publish',
    'pub:cleanup'
  ]
  await concurrently(commands.map(comm => 'yarn ' + comm), {
    killOthers: Array<'success' | 'failure'>(commands.length).fill('failure'),
    maxProcesses: 1, // Force the synchronous execution
    raw: true, // To avoid the concurrently stepper print
  });
})();
