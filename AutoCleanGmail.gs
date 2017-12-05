function cleanGmail() {
  var batchSize = 100 // Process up to 100 threads at once
  var threads = GmailApp.search('older_than:1y -label:own');
  for (j = 0; j < threads.length; j+=batchSize) {
    GmailApp.moveThreadsToTrash(threads.slice(j, j+batchSize));
  }
}
