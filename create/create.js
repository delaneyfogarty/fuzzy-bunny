import {
  createBunny,
  getFamilies,
  checkAuth,
  logout
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    // prevent default
  e.preventDefault();
    // get the name and family id from the form
  const data = new FormData(form);

  const name = data.get('bunny-name');
  const familyId = data.get('family-id');

    // use createBunny to create a bunny with this name and family id
  await createBunny({
    name: name,
    family_id: familyId
  });

  form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
  const familySelector = document.querySelector('select');
    // go get the families from supabase
  const families = await getFamilies();
    // for each family
  for (let family of families) {
    const optionTag = document.createElement('option');
    optionTag.textContent = family.name;
    optionTag.value = family.id;

    familySelector.append(optionTag);
  }
    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
  logout();
});
