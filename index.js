 const comecar_button = document.getElementById("begin");
            const quiz = document.getElementById("quiz");

            //primeira pergunta
            const a1 = document.getElementById("a1");
            const b1 = document.getElementById("b1");
            const c1 = document.getElementById("c1");
            const d1 = document.getElementById("d1");

            //segunda pergunta
            const a2 = document.getElementById("a2");
            const b2 = document.getElementById("b2");
            const c2 = document.getElementById("c2");
            const d2 = document.getElementById("d2");

            //terceira pergunta
            const a3 = document.getElementById("a3");
            const b3 = document.getElementById("b3");
            const c3 = document.getElementById("c3");
            const d3 = document.getElementById("d3");

            //quarta pergunta
            const a4 = document.getElementById("a4");
            const b4 = document.getElementById("b4");
            const c4 = document.getElementById("c4");
            const d4 = document.getElementById("d4");

            //quinta pergunta
            const a5 = document.getElementById("a5");
            const b5 = document.getElementById("b5");
            const c5 = document.getElementById("c5");
            const d5 = document.getElementById("d5");

            //sexta pergunta
            const a6 = document.getElementById("a6");
            const b6 = document.getElementById("b6");
            const c6 = document.getElementById("c6");
            const d6 = document.getElementById("d6");

            //sétima pergunta
            const a7 = document.getElementById("a7");
            const b7 = document.getElementById("b7");
            const c7 = document.getElementById("c7");
            const d7 = document.getElementById("d7");

            //oitava pergunta
            const a8 = document.getElementById("a8");
            const b8 = document.getElementById("b8");
            const c8 = document.getElementById("c8");
            const d8 = document.getElementById("d8");

            //nona pergunta
            const a9 = document.getElementById("a9");
            const b9 = document.getElementById("b9");
            const c9 = document.getElementById("c9");
            const d9 = document.getElementById("d9");

            //decima pergunta
            const a10 = document.getElementById("a10");
            const b10 = document.getElementById("b10");
            const c10 = document.getElementById("c10");
            const d10 = document.getElementById("d10");

            //contagem respostas certas
            let x = 0;

            //contagem respostas marcadas
            let marc = 0;

            //resultado
            const result = document.getElementById("resultado");

            //botao finalizar
            const finish = document.getElementById("finish_button");

            //começa o quiz
            function comecar()
            {
                quiz.style.display="block";
                comecar_button.style.display="none";
            }

            //primeira pergunta
            function incorretob1()
            {
                b1.disabled=true;
                b1.style.backgroundColor="red";

                a1.disabled = true;
                c1.disabled = true;
                d1.disabled = true;


                marc += 1;
            }

            function incorretoa1()
            {
                a1.disabled = true;
                a1.style.backgroundColor="red";

                b1.disabled = true;
                c1.disabled = true;
                d1.disabled = true;

                marc += 1;
            }

            function corretoc1()
            {
                c1.disabled = true;
                c1.style.backgroundColor="green";

                a1.disabled = true;
                b1.disabled = true;
                d1.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretod1()
            {
                d1.disabled = true;
                d1.style.backgroundColor="red";

                a1.disabled = true;
                b1.disabled = true;
                c1.disabled = true;

                marc += 1;
            }


            //segunda pergunta
            function corretob2()
            {
                b2.disabled=true;
                b2.style.backgroundColor="green";

                a2.disabled = true;
                c2.disabled = true;
                d2.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretoa2()
            {
                a2.disabled = true;
                a2.style.backgroundColor="red";

                b2.disabled = true;
                c2.disabled = true;
                d2.disabled = true;

                marc += 1;
            }

            function incorretoc2()
            {
                c2.disabled = true;
                c2.style.backgroundColor="red";

                a2.disabled = true;
                b2.disabled = true;
                d2.disabled = true;

                marc += 1;
            }

            function incorretod2()
            {
                d2.disabled = true;
                d2.style.backgroundColor="red";

                a2.disabled = true;
                b2.disabled = true;
                c2.disabled = true;

                marc += 1;
            }


            //terceira pergunta
             function corretob3()
            {
                b3.disabled=true;
                b3.style.backgroundColor="green";

                a3.disabled = true;
                c3.disabled = true;
                d3.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretoa3()
            {
                a3.disabled = true;
                a3.style.backgroundColor="red";

                b3.disabled = true;
                c3.disabled = true;
                d3.disabled = true;

                marc += 1;
            }

            function incorretoc3()
            {
                c3.disabled = true;
                c3.style.backgroundColor="red";

                a3.disabled = true;
                b3.disabled = true;
                d3.disabled = true;

                marc += 1;
            }

            function incorretod3()
            {
                d3.disabled = true;
                d3.style.backgroundColor="red";

                a3.disabled = true;
                b3.disabled = true;
                c3.disabled = true;

                marc += 1;
            }


            //quarta pergunta
             function incorretob4()
            {
                b4.disabled=true;
                b4.style.backgroundColor="red";

                a4.disabled = true;
                c4.disabled = true;
                d4.disabled = true;



                marc += 1;
            }

            function incorretoa4()
            {
                a4.disabled = true;
                a4.style.backgroundColor="red";

                b4.disabled = true;
                c4.disabled = true;
                d4.disabled = true;

                marc += 1;
            }

            function corretoc4()
            {
                c4.disabled = true;
                c4.style.backgroundColor="green";

                a4.disabled = true;
                b4.disabled = true;
                d4.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretod4()
            {
                d4.disabled = true;
                d4.style.backgroundColor="red";

                a4.disabled = true;
                b4.disabled = true;
                c4.disabled = true;

                marc += 1;
            }

            //quinta pergunta
             function corretob5()
            {
                b5.disabled=true;
                b5.style.backgroundColor="green";

                a5.disabled = true;
                c5.disabled = true;
                d5.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretoa5()
            {
                a5.disabled = true;
                a5.style.backgroundColor="red";

                b5.disabled = true;
                c5.disabled = true;
                d5.disabled = true;

                marc += 1;
            }

            function incorretoc5()
            {
                c5.disabled = true;
                c5.style.backgroundColor="red";

                a5.disabled = true;
                b5.disabled = true;
                d5.disabled = true;

                marc += 1;
            }

            function incorretod5()
            {
                d5.disabled = true;
                d5.style.backgroundColor="red";

                a5.disabled = true;
                b5.disabled = true;
                c5.disabled = true;

                marc += 1;
            }

            //sexta pergunta
             function corretob6()
            {
                b6.disabled=true;
                b6.style.backgroundColor="green";

                a6.disabled = true;
                c6.disabled = true;
                d6.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretoa6()
            {
                a6.disabled = true;
                a6.style.backgroundColor="red";

                b6.disabled = true;
                c6.disabled = true;
                d6.disabled = true;

                marc += 1;
            }

            function incorretoc6()
            {
                c6.disabled = true;
                c6.style.backgroundColor="red";

                a6.disabled = true;
                b6.disabled = true;
                d6.disabled = true;

                marc += 1;
            }

            function incorretod6()
            {
                d6.disabled = true;
                d6.style.backgroundColor="red";

                a6.disabled = true;
                b6.disabled = true;
                c6.disabled = true;

                marc += 1;
            }

            //setima pergunta
             function corretob7()
            {
                b7.disabled=true;
                b7.style.backgroundColor="green";

                a7.disabled = true;
                c7.disabled = true;
                d7.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretoa7()
            {
                a7.disabled = true;
                a7.style.backgroundColor="red";

                b7.disabled = true;
                c7.disabled = true;
                d7.disabled = true;

                marc += 1;
            }

            function incorretoc7()
            {
                c7.disabled = true;
                c7.style.backgroundColor="red";

                a7.disabled = true;
                b7.disabled = true;
                d7.disabled = true;

                marc += 1;
            }

            function incorretod7()
            {
                d7.disabled = true;
                d7.style.backgroundColor="red";

                a7.disabled = true;
                b7.disabled = true;
                c7.disabled = true;

                marc += 1;
            }

            //oitava pergunta
             function incorretob8()
            {
                b8.disabled=true;
                b8.style.backgroundColor="red";

                a8.disabled = true;
                c8.disabled = true;
                d8.disabled = true;


                marc += 1;
            }

            function incorretoa8()
            {
                a8.disabled = true;
                a8.style.backgroundColor="red";

                b8.disabled = true;
                c8.disabled = true;
                d8.disabled = true;

                marc += 1;
            }

            function corretoc8()
            {
                c8.disabled = true;
                c8.style.backgroundColor="green";

                a8.disabled = true;
                b8.disabled = true;
                d8.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretod8()
            {
                d8.disabled = true;
                d8.style.backgroundColor="red";

                a8.disabled = true;
                b8.disabled = true;
                c8.disabled = true;

                marc += 1;
            }

            //nona pergunta
             function incorretob9()
            {
                b9.disabled=true;
                b9.style.backgroundColor="red";

                a9.disabled = true;
                c9.disabled = true;
                d9.disabled = true;


                marc += 1;
            }

            function incorretoa9()
            {
                a9.disabled = true;
                a9.style.backgroundColor="red";

                b9.disabled = true;
                c9.disabled = true;
                d9.disabled = true;

                marc += 1;
            }

            function corretoc9()
            {
                c9.disabled = true;
                c9.style.backgroundColor="green";

                a9.disabled = true;
                b9.disabled = true;
                d9.disabled = true;

                x += 1;

                marc += 1;
            }

            function incorretod9()
            {
                d9.disabled = true;
                d9.style.backgroundColor="red";

                a9.disabled = true;
                b9.disabled = true;
                c9.disabled = true;

                marc += 1;
            }

            //decima pergunta
             function incorretob10()
            {
                b10.disabled=true;
                b10.style.backgroundColor="red";

                a10.disabled = true;
                c10.disabled = true;
                d10.disabled = true;


                marc += 1;
            }

            function incorretoa10()
            {
                a10.disabled = true;
                a10.style.backgroundColor="red";

                b10.disabled = true;
                c10.disabled = true;
                d10.disabled = true;

                marc += 1;
            }

            function incorretoc10()
            {
                c10.disabled = true;
                c10.style.backgroundColor="red";

                a10.disabled = true;
                b10.disabled = true;
                d10.disabled = true;

                marc += 1;
            }

            function corretod10()
            {
                d10.disabled = true;
                d10.style.backgroundColor="green";

                a10.disabled = true;
                b10.disabled = true;
                c10.disabled = true;

                x += 1;

                marc += 1;

            }

            function finalizar()
            {
                if(marc < 10)
                {
                    alert("Marque todas as respostas!");
                }
                else
                {
                    result.innerHTML = `Você acertou ${x} de 10`;
                    finish.style.display = "none";
                }
            }