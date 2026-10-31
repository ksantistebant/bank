```mermaid
    graph TD
        %% Definición de estilos basados en tu paleta
        classDef mainRepo fill:#31112C,stroke:#FBDCC4,stroke-width:2px,color:#FBDCC4;
        classDef folder fill:#7D0633,stroke:#F2A07B,stroke-width:2px,color:#FBDCC4;
        classDef file fill:#FBDCC4,stroke:#31112C,stroke-width:1px,color:#31112C;

        %% Nodos principales
        A[📁 Proyecto_Final_Fraude_Bancario]:::mainRepo
        
        B[📁 01_notebook]:::folder
        C[📁 02_src]:::folder
        D[📁 03_tests]:::folder
        E[📁 04_html_interactivo]:::folder
        F[📁 05_datos]:::folder
        G[📁 06_documentacion]:::folder
        H[📁 07_presentacion]:::folder
        I[📄 README.md]:::file

        %% Estructura
        A --> B
        A --> C
        A --> D
        A --> E
        A --> F
        A --> G
        A --> H
        A --> I

        %% Archivos internos
        B --> B1[📄 Notebook_Fraude.ipynb]:::file
        C --> C1[📄 probabilidad.py]:::file
        C --> C2[📄 similitud.py]:::file
        C --> C3[📄 requirements.txt]:::file
        D --> D1[📄 test_similitud.py]:::file
        E --> E1[📄 index.html]:::file
        E --> E2[📄 script.js]:::file
        E --> E3[📄 style.css]:::file
        F --> F1[📄 datos_muestra.json]:::file

## 🗺️ Roadmap del Proyecto

```mermaid
flowchart TD
    subgraph V1 [AVANCE 1: FUNDAMENTOS]
        m1(M1: Probabilidad y Tasa Base)
        m2(M2: Momentos Estadísticos)
    end
    
    subgraph V2 [AVANCE 2: MODELADO ML]
        m3(M3: Independencia de Variables)
        m4(M4: Regresión Logística y Poisson)
    end
    
    subgraph V3 [AVANCE 3: OPTIMIZACIÓN]
        m5(M5: Similitud y Distancia Vectorial)
        m6(M6: Reducción PCA a 2D)
        m8(M8 & M9: Sesgos y Método Simplex)
    end

    V1 ==>|Update| V2
    V2 ==>|Update| V3

```