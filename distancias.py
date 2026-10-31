"""
Módulo de Similitud y Distancias
--------------------------------
Contiene funciones para calcular la distancia y similitud entre vectores de transacciones.
"""
import numpy as np

def distancia_euclidiana(vec1, vec2):
    """
    Calcula la distancia recta (Euclidiana) entre dos puntos en un espacio n-dimensional.
    A menor distancia, mayor similitud.
    """
    v1, v2 = np.array(vec1), np.array(vec2)
    return float(np.linalg.norm(v1 - v2))

def similitud_coseno(vec1, vec2):
    """
    Calcula la similitud del coseno (ángulo) entre dos vectores.
    Devuelve un valor entre -1 y 1 (1 indica que apuntan en la misma dirección).
    """
    v1, v2 = np.array(vec1), np.array(vec2)
    producto_punto = np.dot(v1, v2)
    norma_v1 = np.linalg.norm(v1)
    norma_v2 = np.linalg.norm(v2)
    
    if norma_v1 == 0 or norma_v2 == 0:
        return 0.0
    return float(producto_punto / (norma_v1 * norma_v2))