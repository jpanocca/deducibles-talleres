Feature: Extrae los deducibles de un texto plano
    Scenario Outline: Extrae los deducibles correctamente
        Given se invoca el metodo de extraccion de deducibles del texto <textoPlano>
        When se invoca a demanda
        Then se mostrará el objeto
        Examples:
            | textoPlano |
            | $20        |