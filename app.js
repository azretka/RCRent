<script>
  const track = document.getElementById('reviewsTrack');
  const dots = document.querySelectorAll('.reviews__dot');
  let current = 0;

  function goTo(index) {
    current = index;
    const itemWidth = track.children[0].offsetWidth + 24;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
    dots.forEach((d, i) = d.classList.toggle('reviews__dot--active', i === index))
    }

  dots.forEach(dot = {
    dot.addEventListener('click', () => goTo(+dot.dataset.index))}
  );
</script>