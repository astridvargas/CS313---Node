// Needed for Materialize to use the Select library from them
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elements);
  });