import React, { useEffect, useState, useMemo } from 'react';
import ContentPage from '../components/ContentPage';
import axios from "axios";

import { Bubble } from "react-chartjs-2";


function GraficoPage() {
    const [episodesData, setEpisodesData] = useState([]);

    useEffect(() => {
        let episodes = [];
        axios
            .get("https://rickandmortyapi.com/api/episode")
            .then(res => {
                episodes = [...episodes, ...res.data.results];
                return axios.get("https://rickandmortyapi.com/api/episode?page=2");
            })
            .then(res => {
                episodes = [...episodes, ...res.data.results];
                return axios.get("https://rickandmortyapi.com/api/episode?page=3");
            })
            .then(res => {
                episodes = [...episodes, ...res.data.results];
                setEpisodesData(episodes);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const generateColor = (r) => {
        return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.4)`;
    }
    
    
    const chartData = useMemo(() => {
        const seasons = [];
        const episodes = [];
        const characters = [];   
      
        episodesData.forEach(episode => {
          seasons.push(parseInt(episode.episode.substring(1, 3)));
          episodes.push(parseInt(episode.episode.substring(4)));
          characters.push(parseInt(episode.characters.length));
        });
      
        return {
          labels: seasons,
          datasets: [
            {
              label: "",
              backgroundColor: seasons.map((season, index) => generateColor(characters[index])),
              borderColor: "rgba(12,75,77,1)",
              data: seasons.map((season, index) => {
                return { x: episodes[index], y: season, r: characters[index] }
              })
            }
          ]
        };
    }, [episodesData]);


    return (
        <ContentPage>          
                <Bubble
                    data={chartData}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        legend: {
                            display: false,
                        },
                        layout: {
                            padding: {
                                top: 80,
                                bottom: 70,
                                left: 70,
                                right: 70
                            },                            
                            titleSpacing: 700
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "Temporadas"
                                },
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    stepSize: 1,
                                    beginAtZero: true,
                                    padding: 4
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "Episodios"
                                },
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    stepSize: 1,
                                    beginAtZero: true,
                                    padding: 4
                                }
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    return `Cantidad de personajes: ${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r}`;
                                }
                            }
                        },
                        elements: {
                            point: {
                                pointRadius: chartData.datasets[0].data.map(point => point.r),
                                pointHoverRadius: chartData.datasets[0].data.map(point => point.r + 5),
                                datalabels: {
                                    display: true,
                                }
                            }
                        }
                    }}                  
                ></Bubble>           
        </ContentPage>
    );
}
export default GraficoPage;
