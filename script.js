// JavaScript for Interactive Simulation

document.addEventListener("DOMContentLoaded", () => {
  const philosophers = document.querySelectorAll(".philosopher");
  const stateNames = ["thinking", "hungry", "eating"];
  const forks = Array(philosophers.length).fill(true); // Fork availability
  const philosopherStates = Array(philosophers.length).fill(0); // All start thinking

  const updatePhilosopher = (index) => {
    const leftFork = index;
    const rightFork = (index + 1) % philosophers.length;

    if (philosopherStates[index] === 0) {
      philosopherStates[index] = 1; // Thinking -> Hungry
    } else if (philosopherStates[index] === 1 && forks[leftFork] && forks[rightFork]) {
      forks[leftFork] = forks[rightFork] = false; // Hungry -> Eating
      philosopherStates[index] = 2;
    } else if (philosopherStates[index] === 2) {
      forks[leftFork] = forks[rightFork] = true; // Eating -> Thinking
      philosopherStates[index] = 0;
    }

    // Update display
    philosophers[index].className = `philosopher ${stateNames[philosopherStates[index]]}`;
    philosophers[index].textContent = `Philosopher ${index + 1} is ${stateNames[philosopherStates[index]]}`;
  };

  document.getElementById("startSimulation").addEventListener("click", () => {
    if (window.simulationInterval) clearInterval(window.simulationInterval);

    window.simulationInterval = setInterval(() => {
      philosophers.forEach((_, index) => updatePhilosopher(index));
    }, 2000);
  });

  const languageSelector = document.getElementById("languageSelector");
  const codeDisplay = document.getElementById("codeDisplay");

  const codeSnippets = {
    c: `
#include &lt;stdio.h&gt;
#include &lt;pthread.h&gt;
#include &lt;semaphore.h&gt;

#define N 5
sem_t forks[N];

void* philosopher(void* num) {
    int id = *(int*)num;
    while (1) {
        printf("Philosopher %d is thinking\\n", id);
        sem_wait(&forks[id]);
        sem_wait(&forks[(id + 1) % N]);
        printf("Philosopher %d is eating\\n", id);
        sem_post(&forks[id]);
        sem_post(&forks[(id + 1) % N]);
    }
    return NULL;
}

int main() {
    pthread_t philosophers[N];
    int ids[N];
    for (int i = 0; i < N; i++) {
        sem_init(&forks[i], 0, 1);
        ids[i] = i;
    }
    for (int i = 0; i < N; i++) {
        pthread_create(&philosophers[i], NULL, philosopher, &ids[i]);
    }
    for (int i = 0; i < N; i++) {
        pthread_join(philosophers[i], NULL);
    }
    return 0;
}
    `,
    python: `
import threading
import time

N = 5
forks = [threading.Semaphore(1) for _ in range(N)]

def philosopher(id):
    while True:
        print(f"Philosopher {id} is thinking")
        time.sleep(1)
        forks[id].acquire()
        forks[(id + 1) % N].acquire()
        print(f"Philosopher {id} is eating")
        time.sleep(1)
        forks[id].release()
        forks[(id + 1) % N].release()

threads = []
for i in range(N):
    t = threading.Thread(target=philosopher, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
    `
  };

  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    codeDisplay.innerHTML = codeSnippets[selectedLanguage];
  });
});
