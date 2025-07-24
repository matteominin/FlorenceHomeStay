import { useEffect, useState } from 'react'
import styles from './ApartmentInstructions.module.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'
import VideoInstruction from './components/VideoInstruction'

const API_URL = import.meta.env.VITE_API_URL;

const ApartmentInstructions = () => {
    const [videoInstructions, setVideoInstructions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchVideoInstructions = async () => {
            try {
                const response = await fetch(`${API_URL}/api/video-instructions`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setVideoInstructions(data)
            } catch (error) {
                console.error('Error fetching video instructions:', error)
                setError("Failed to fetch video instructions, please try again later.")
            } finally {
                setLoading(false)
            }
        }

        fetchVideoInstructions()
    }, [])

    if (loading) {
        return (
            <>
                <Header />
                <div className={styles['apartment-instructions']}>
                    <div className={styles.intro}>
                        <h1>Welcome to our apartment</h1>
                        <p>Your comfort is our priority. Here are some instructions to help you settle in.</p>
                    </div>

                    <div className={styles.instructions_list}>
                        <div className={styles.instruction}>
                            <h2>House Rules</h2>
                            <ul>
                                <li>No smoking inside the apartment.</li>
                                <li>Pets are not allowed.</li>
                                <li>Please respect the neighbors and keep noise to a minimum after 10 PM.</li>
                                <li>Garbage should be disposed of in the designated bins.</li>
                            </ul>
                        </div>
                        <div className={styles.instruction}>
                            <h2>Check-in/Check-out</h2>
                            <p>Check-in time is after 3 PM and check-out time is by 11 AM.</p>
                            <p>Please inform us in advance if you need to adjust these times.</p>
                        </div>

                        <div className={styles.instruction}>
                            <h2>Wi-Fi</h2>
                            <p>You can find the Wi-Fi information in the welcome booklet located on the coffee table.</p>
                            <p>If you have any issues connecting, please contact us.</p>
                        </div>

                        <div className={styles.instruction}>
                            <h2>Emergency Contacts</h2>
                            <p>In case of an emergency, please dial 112 for police, fire, or medical assistance.</p>
                            <p>For non-emergencies, you can reach us at the contact number provided in the welcome booklet.</p>
                        </div>
                    </div>

                    <div
                        style={{ visibility: videoInstructions.length > 0 ? 'visible' : 'hidden' }}
                        className={styles.row}
                    />

                    <div className={styles.loading}>
                        <Loading message={"Loading video instructions..."} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    if (error) {
        return (
            <>
                <Header />
                <div className={styles['apartment-instructions']}>
                    <div className={styles.intro}>
                        <h1>Welcome to our apartment</h1>
                        <p>Your comfort is our priority. Here are some instructions to help you settle in.</p>
                    </div>

                    <div className={styles.instructions_list}>
                        <div className={styles.instruction}>
                            <h2>House Rules</h2>
                            <ul>
                                <li>No smoking inside the apartment.</li>
                                <li>Pets are not allowed.</li>
                                <li>Please respect the neighbors and keep noise to a minimum after 10 PM.</li>
                                <li>Garbage should be disposed of in the designated bins.</li>
                            </ul>
                        </div>
                        <div className={styles.instruction}>
                            <h2>Check-in/Check-out</h2>
                            <p>Check-in time is after 3 PM and check-out time is by 11 AM.</p>
                            <p>Please inform us in advance if you need to adjust these times.</p>
                        </div>

                        <div className={styles.instruction}>
                            <h2>Wi-Fi</h2>
                            <p>You can find the Wi-Fi information in the welcome booklet located on the coffee table.</p>
                            <p>If you have any issues connecting, please contact us.</p>
                        </div>

                        <div className={styles.instruction}>
                            <h2>Emergency Contacts</h2>
                            <p>In case of an emergency, please dial 112 for police, fire, or medical assistance.</p>
                            <p>For non-emergencies, you can reach us at the contact number provided in the welcome booklet.</p>
                        </div>
                    </div>
                    <div className={styles.error_message}>
                        <h2>Error</h2>
                        <p>{error}</p>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className={styles['apartment-instructions']}>
                <div className={styles.intro}>
                    <h1>Welcome to our apartment</h1>
                    <p>Your comfort is our priority. Here are some instructions to help you settle in.</p>
                </div>

                <div className={styles.instructions_list}>
                    <div className={styles.instruction}>
                        <h2>House Rules</h2>
                        <ul>
                            <li>No smoking inside the apartment.</li>
                            <li>Pets are not allowed.</li>
                            <li>Please respect the neighbors and keep noise to a minimum after 10 PM.</li>
                            <li>Garbage should be disposed of in the designated bins.</li>
                        </ul>
                    </div>
                    <div className={styles.instruction}>
                        <h2>Check-in/Check-out</h2>
                        <p>Check-in time is after 3 PM and check-out time is by 11 AM.</p>
                        <p>Please inform us in advance if you need to adjust these times.</p>
                    </div>

                    <div className={styles.instruction}>
                        <h2>Wi-Fi</h2>
                        <p>You can find the Wi-Fi information in the welcome booklet located on the coffee table.</p>
                        <p>If you have any issues connecting, please contact us.</p>
                    </div>

                    <div className={styles.instruction}>
                        <h2>Emergency Contacts</h2>
                        <p>In case of an emergency, please dial 112 for police, fire, or medical assistance.</p>
                        <p>For non-emergencies, you can reach us at the contact number provided in the welcome booklet.</p>
                    </div>
                </div>

                <div
                    style={{ visibility: videoInstructions.length > 0 ? 'visible' : 'hidden' }}
                    className={styles.row}
                />

                {videoInstructions.docs?.length > 0 && (
                    <div className={styles.video_section}>
                        {videoInstructions.docs.map((video, index) => (
                            <VideoInstruction
                                key={index}
                                title={video.title}
                                videoUrl={video.videoUrl}
                                description={video.description}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default ApartmentInstructions