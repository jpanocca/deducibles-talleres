Feature: Procesar deducible
    Scenario Outline: Póliza con deducible texto plano
        Given la póliza tiene un deducible en forma del <texto>
        When ejecutamos el conversor de deducible
        Then obtenemos la parametrización del deducible en <detalle>
        Examples:
            | texto      | detalle     |
            | D22Request | D22Response |