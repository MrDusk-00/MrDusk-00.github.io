document.addEventListener("DOMContentLoaded", () => {
  // Datos completos con estructura detallada según solicitud
  const timelineData = [
    {
      era: "Época Antigua",
      philosophers: [
        {
          name: "Sócrates",
          role: "La Moral e Intelectualismo",
          image: "socrates.jpg",
          preview:
            "El padre de la ética occidental. Centrado en el cuidado del alma.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>Para Sócrates, el ser humano es <strong>su alma (psique)</strong>. El cuerpo es solo el instrumento del alma, y la esencia de la persona reside en su capacidad de pensar y actuar moralmente.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Es fundamental para la vida buena. El conocimiento es la vía hacia la virtud.</li>
                                <li><strong>Cuerpo y Alma:</strong> Dualismo. El alma es divina e inmortal; el cuerpo es mortal y a menudo un obstáculo con sus pasiones.</li>
                                <li><strong>Libertad:</strong> Entendida como <em>autodominio</em> (enkrateia). Es libre quien domina sus propios instintos y no es esclavo de ellos.</li>
                                <li><strong>Moral:</strong> Intelectualismo moral: "Nadie hace el mal voluntariamente". El que obra mal lo hace por ignorancia del bien.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Moral", "Ser Humano", "Razón", "Cuerpo-Alma"],
        },
        {
          name: "Platón",
          role: "El Idealista",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/Plato-raphael.jpg",
          preview: "El cuerpo como cárcel del alma y la búsqueda de las Ideas.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>Platón define al hombre como un <strong>alma inmortal</strong> encerrada accidentalmente en un cuerpo mortal. El verdadero "yo" pertenece al mundo inteligible de las Ideas.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Es la parte superior del alma (logística), representada por el auriga que debe guiar a las otras partes (irascible y concupiscible).</li>
                                <li><strong>Cuerpo y Alma:</strong> Dualismo radical. El cuerpo es la "cárcel del alma", fuente de error y pasiones bajas.</li>
                                <li><strong>Libertad:</strong> Consiste en liberar el alma de la esclavitud de los sentidos y ascender al conocimiento de la Verdad.</li>
                                <li><strong>Moral:</strong> La justicia es la armonía entre las tres partes del alma, donde la razón gobierna.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Cuerpo-Alma", "Razón", "Libertad", "Moral"],
        },
        {
          name: "Aristóteles",
          role: "El Realista",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
          preview: "Unidad sustancial de cuerpo y alma. El animal político.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>El hombre es un <strong>"Animal Racional"</strong> y un <strong>"Animal Político"</strong> (Zoon Politikon). No es solo alma, sino una unión sustancial e inseparable de cuerpo y alma.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Es la función propia y distintiva del ser humano. La excelencia (arete) está en el uso de la razón.</li>
                                <li><strong>Cuerpo y Alma:</strong> Hilemorfismo: El alma es la "forma" que da vida al cuerpo ("materia"). No pueden existir separados naturalmente.</li>
                                <li><strong>Libertad:</strong> Capacidad de elección deliberada (proairesis). No es hacer lo que uno quiere, sino elegir racionalmente los medios para un fin.</li>
                                <li><strong>Moral:</strong> Es la búsqueda de la Felicidad (Eudaimonía) a través de la práctica de la Virtud (término medio).</li>
                            </ul>
                        </div>
                    `,
          tags: ["Cuerpo-Alma", "Ser Humano", "Moral", "Razón"],
        },
      ],
    },
    {
      era: "Época Medieval",
      philosophers: [
        {
          name: "San Agustín",
          role: "Fe y Razón",
          image: "sanagustin.jpg",
          preview: "La búsqueda de Dios en la interioridad del hombre.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>El ser humano es un misterio para sí mismo, creado a <strong>imagen y semejanza de Dios</strong>. Es un alma racional que se sirve de un cuerpo mortal y terrenal.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Es valiosa, pero limitada. Necesita ser iluminada por la Fe para alcanzar la Verdad plena. "Cree para entender".</li>
                                <li><strong>Cuerpo y Alma:</strong> Prioridad absoluta del alma sobre el cuerpo. El alma debe regir al cuerpo.</li>
                                <li><strong>Libertad:</strong> Distingue entre "libre albedrío" (capacidad de elegir) y "libertad" (poder para hacer el bien). El pecado daña la libertad, que necesita la Gracia.</li>
                                <li><strong>Moral:</strong> Basada en el amor (Caridad). "Ama y haz lo que quieras". El mal es ausencia de bien.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Libertad", "Moral", "Ser Humano"],
        },
        {
          name: "Santo Tomás",
          role: "El Escolástico",
          image: "tomas.jpg",
          preview: "Síntesis perfecta entre Aristóteles y el Cristianismo.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>Define a la persona como una <strong>"sustancia individual de naturaleza racional"</strong>. Es una unidad profunda: el alma es la forma única del cuerpo.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> No contradice a la Fe. La razón puede conocer verdades naturales, la fe conoce las sobrenaturales. Ambas vienen de Dios.</li>
                                <li><strong>Cuerpo y Alma:</strong> El alma racional es inmortal y subsistente, pero está hecha para estar unida al cuerpo.</li>
                                <li><strong>Libertad:</strong> La voluntad sigue al entendimiento. Somos libres porque nuestro juicio no está determinado obligatoriamente por bienes finitos.</li>
                                <li><strong>Moral:</strong> Ley Natural inscrita en el corazón humano: "Hacer el bien y evitar el mal". Fin último: Ver a Dios.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Razón", "Cuerpo-Alma", "Libertad"],
        },
      ],
    },
    {
      era: "Época Moderna",
      philosophers: [
        {
          name: "René Descartes",
          role: "Racionalista",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
          preview: "El dualismo interactivo y el 'Pienso, luego existo'.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>El hombre es, en esencia, una <strong>"cosa que piensa" (Res Cogitans)</strong>. Su identidad reside en la conciencia, no en la materia.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Es la "luz natural", la única fuente segura de conocimiento frente al engaño de los sentidos.</li>
                                <li><strong>Cuerpo y Alma:</strong> Dualismo estricto. El cuerpo es una máquina (Res Extensa) y el alma es espíritu libre. Se comunican en la glándula pineal.</li>
                                <li><strong>Libertad:</strong> La voluntad humana es infinita (como la de Dios), aunque el entendimiento es finito. El error surge al elegir sin claridad.</li>
                                <li><strong>Moral:</strong> Propuso una "moral provisional" de moderación y constancia mientras buscaba la verdad absoluta.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Razón", "Cuerpo-Alma", "Ser Humano"],
        },
        {
          name: "John Locke",
          role: "Empirista",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b8/John_Locke.jpg",
          preview: "Derechos naturales y la mente como hoja en blanco.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>El ser humano es un <strong>ser consciente y libre</strong>. Su identidad personal depende de la continuidad de su conciencia (memoria), no de una sustancia del alma.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> No posee ideas innatas. Su función es procesar y combinar los datos que vienen de la experiencia (sentidos).</li>
                                <li><strong>Cuerpo y Alma:</strong> No se preocupa tanto por la sustancia del alma, sino por la identidad psicológica y la propiedad del propio cuerpo.</li>
                                <li><strong>Libertad:</strong> Es un derecho natural. Libertad es la potencia de actuar o no actuar según decida la mente.</li>
                                <li><strong>Moral:</strong> Existen derechos naturales inalienables (Vida, Libertad, Propiedad) que la razón descubre y deben ser respetados.</li>
                            </ul>
                        </div>
                    `,
          tags: ["Ser Humano", "Libertad", "Moral"],
        },
        {
          name: "Immanuel Kant",
          role: "Criticista",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Immanuel_Kant_%28painted_portrait%29.jpg",
          preview: "La autonomía de la voluntad y el sujeto trascendental.",
          fullContent: `
                        <div class="modal-section">
                            <h3>Concepción del Ser Humano</h3>
                            <p>El hombre es un ciudadano de dos mundos: como fenómeno está sujeto a leyes naturales, pero como <strong>noúmeno</strong> (ser racional) es libre y tiene <strong>dignidad</strong> absoluta.</p>
                        </div>
                        <div class="modal-section">
                            <h3>Conceptos Clave</h3>
                            <ul>
                                <li><strong>Razón:</strong> Distingue Razón Pura (conocimiento científico) y Razón Práctica (moral). La razón legisla sobre la naturaleza y sobre la conducta.</li>
                                <li><strong>Cuerpo y Alma:</strong> La inmortalidad del alma es un "postulado" necesario de la razón práctica para que tenga sentido la moral, aunque no se puede probar científicamente.</li>
                                <li><strong>Libertad:</strong> Es la propiedad fundamental de la voluntad (autonomía). Sin libertad no hay moralidad.</li>
                                <li><strong>Moral:</strong> Deontología (Deber). Imperativo Categórico: "Obra de tal modo que trates a la humanidad siempre como un fin y nunca solo como un medio".</li>
                            </ul>
                        </div>
                    `,
          tags: ["Moral", "Libertad", "Razón"],
        },
      ],
    },
  ];

  const container = document.getElementById("timeline-container");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalBody = document.getElementById("modal-body");
  const closeModalBtn = document.querySelector(".close-modal");

  // Función para renderizar
  function renderTimeline(filter = "all") {
    container.innerHTML = '<div class="timeline-line"></div>';

    timelineData.forEach((period) => {
      const activePhilosophers = period.philosophers.filter(
        (p) => filter === "all" || p.tags.includes(filter),
      );

      if (activePhilosophers.length === 0 && filter !== "all") return;

      const eraSection = document.createElement("div");
      eraSection.className = "era-section";

      const eraTitle = document.createElement("h2");
      eraTitle.className = "era-title";
      eraTitle.textContent = period.era;
      eraSection.appendChild(eraTitle);

      activePhilosophers.forEach((philo) => {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper hidden-initial";

        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openModal(philo);

        card.innerHTML = `
                    <div class="card-img-container">
                        <img src="${philo.image}" alt="${philo.name}" class="card-img">
                    </div>
                    <div class="card-content">
                        <h3>${philo.name}</h3>
                        <span class="role">${philo.role}</span>
                        <p class="card-preview">${philo.preview}</p>
                        <span class="read-more">Click para ver detalles &rarr;</span>
                        <div class="tags" style="margin-top: 10px; opacity: 0.6; font-size: 0.8rem;">
                            ${philo.tags.map((t) => `#${t}`).join(" ")}
                        </div>
                    </div>
                `;

        wrapper.appendChild(card);
        eraSection.appendChild(wrapper);
      });

      container.appendChild(eraSection);
    });

    initObservers();
  }

  function initObservers() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".card-wrapper").forEach((el) => {
      observer.observe(el);
    });
  }

  function openModal(philo) {
    modalImg.src = philo.image;
    modalName.textContent = philo.name;
    modalRole.textContent = philo.role;
    modalBody.innerHTML = philo.fullContent;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      renderTimeline(filter);
    });
  });

  renderTimeline();
});
