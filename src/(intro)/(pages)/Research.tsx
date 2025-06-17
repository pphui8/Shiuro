'use client'

import styles from './Research.module.css'
import React from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import ForceGraph3D from 'react-force-graph-3d';

export const Research = () => {
    const data = {
        nodes: [
            { id: 'me', name: 'Me', group: 'me', color: '#ff6600' },
            { id: 'Software Engineering', name: 'Software Engineering', group: 'se', url: 'https://en.wikipedia.org/wiki/Software_engineering', color: '#3366cc' },
            { id: 'Artificial Intelligence', name: 'Artificial Intelligence', group: 'ai', url: 'https://en.wikipedia.org/wiki/Artificial_intelligence', color: '#009933' },

            { id: 'Requirements Engineering', name: 'Requirements Engineering', group: 'se', url: 'https://en.wikipedia.org/wiki/Requirements_engineering', color: '#3366cc' },
            { id: 'Privacy Engineering', name: 'Privacy Engineering', group: 'se', url: 'https://en.wikipedia.org/wiki/Privacy_engineering', color: '#3366cc' },

            { id: 'Privacy Requirements Engineering', name: 'Privacy Requirements Engineering', group: 'se', url: 'https://www.igi-global.com/dictionary/a-survey-of-methodologies-for-protecting-privacy-of-user-data-within-enterprise-information-infrastructure/90864', color: '#3366cc' },

            { id:'Language Modeling', name: 'Language Models', group: 'ai', url: 'https://en.wikipedia.org/wiki/Language_model', color: '#30f271' },
            { id: 'Image Generation', name: 'Image Generation', group: 'ai', url: 'https://en.wikipedia.org/wiki/Image_generation', color: '#3af2d0' },

            { id: 'Bert', name: 'BERT', group: 'ai', url: 'https://en.wikipedia.org/wiki/BERT_(language_model)', color: '#30f271' },
            { id: 'GPT', name: 'GPT', group: 'ai', url: 'https://en.wikipedia.org/wiki/GPT_(language_model)', color: '#30f271' },
            { id: 'GANs', name: 'GANs', group: 'ai', url: 'https://en.wikipedia.org/wiki/Generative_adversarial_network', color: '#3af2d0' },
            { id: 'Stable Diffusion', name: 'Stable Diffusion', group: 'ai', url: 'https://en.wikipedia.org/wiki/Stable_Diffusion', color: '#3af2d0' },

            { id: 'GAN', name: 'Generative Adversarial Networks', group: 'ai', url: 'https://en.wikipedia.org/wiki/Generative_adversarial_network', color: '#3af2d0' },
            { id: 'StyleGAN', name: 'StyleGAN', group: 'ai', url: 'https://en.wikipedia.org/wiki/StyleGAN', color: '#3af2d0' },
            { id: 'StyleGAN2', name: 'StyleGAN2', group: 'ai', url: 'https://en.wikipedia.org/wiki/StyleGAN2', color: '#3af2d0' },
            { id: 'CycleGAN', name: 'CycleGAN', group: 'ai', url: 'https://en.wikipedia.org/wiki/CycleGAN', color: '#3af2d0' },
        ],
        links: [
            { source: 'me', target: 'Software Engineering' },
            { source: 'me', target: 'Artificial Intelligence' },

            { source: 'Software Engineering', target: 'Requirements Engineering' },
            { source: 'Software Engineering', target: 'Privacy Engineering' },

            { source: 'Privacy Engineering', target: 'Privacy Requirements Engineering' },
            { source: 'Requirements Engineering', target: 'Privacy Requirements Engineering' },

            { source: 'Artificial Intelligence', target: 'Language Modeling' },
            { source: 'Artificial Intelligence', target: 'Image Generation' },

            { source: 'Language Modeling', target: 'Bert' },
            { source: 'Language Modeling', target: 'GPT' },

            { source: 'Image Generation', target: 'GANs' },
            { source: 'Image Generation', target: 'Stable Diffusion' },

            { source: 'GANs', target: 'GAN' },
            { source: 'GANs', target: 'StyleGAN' },
            { source: 'GANs', target: 'StyleGAN2' },
            { source: 'GANs', target: 'CycleGAN' },
        ],
    };
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Research Interests</h1>
            <ForceGraph3D
                graphData={data}
                nodeLabel="name"
                nodeAutoColorBy="group"
                backgroundColor="#fcf5f7"
                linkColor={() => '#0ABAB5'}
                linkWidth={() => 1}
                linkOpacity={0.6}
                nodeThreeObject={(node: { id: string | undefined; color: string; }) => {
                if( node.id === 'me') {
                    const imgTexture = new THREE.TextureLoader().load(`./profile.jpg`);
                    imgTexture.colorSpace = THREE.SRGBColorSpace;
                    const material = new THREE.SpriteMaterial({ map: imgTexture });
                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(12, 12, 1);
                    return sprite;
                } else {
                    const sprite = new SpriteText(node.id);
                    sprite.color = node.color;
                    sprite.textHeight = 8;
                    sprite.fontFace = "Times New Roman";
                    return sprite;
                }
                }}
                onNodeClick={(node: any) => {
                    if (node.url) {
                        window.open(node.url, '_blank');
                    }
                }}
            />
        </div>
    );
};