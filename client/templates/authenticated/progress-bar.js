Template.progressBar.helpers({
  progress: function () {
    return Math.round(Slingshot.Upload.progress() * 100);
  }
});