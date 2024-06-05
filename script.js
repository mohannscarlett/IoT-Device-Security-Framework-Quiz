// Highlight questions on hover
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('mouseenter', () => {
    question.style.backgroundColor = '#e0e0e0';
    question.style.transition = 'background-color 0.3s ease';
  });

  question.addEventListener('mouseleave', () => {
    question.style.backgroundColor = '#f9f9f9';
  });
});
