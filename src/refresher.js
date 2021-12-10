export default function refresher() {
  const refresherContainer = document.createElement('div');
  refresherContainer.classList.add('refresher', 'di', 'btm-bdr');

  const text = document.createElement('p');
  text.textContent = "Today's to Do";

  const refresh = document.createElement('i');
  refresh.classList.add('fas', 'fa-sync');

  refresherContainer.appendChild(text);
  refresherContainer.appendChild(refresh);

  return refresherContainer;
}